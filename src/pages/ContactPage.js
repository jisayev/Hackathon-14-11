// ContactPage.js

import React, {useState} from "react";
import {useDrop, useDrag} from "react-dnd";

const Box = ({id, text, index, moveBox}) => {
    const [{isDragging}, drag, dragPreview] = useDrag({
        type: "box",
        item: {id, index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: "box",
        hover: (item, monitor) => {
            if (!dragRef.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = dragRef.current.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            item.index = hoverIndex;
            moveBox(dragIndex, hoverIndex);
        },
    });

    const dragRef = React.useRef(null);
    drag(dragRef);

    return (
        <div
            ref={(node) => {
                dragRef.current = node;
                dragPreview(node, {captureDraggingState: true});
                drop(node);
            }}
            style={{
                padding: "8px",
                border: "1px solid #ddd",
                marginBottom: "4px",
                width: "90%", // Fixed pixel width
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
            }}
        >
            {text}
        </div>
    );
};

const ContactPage = () => {
    const [boxes, setBoxes] = useState([
        {id: 1, text: "Lifestyle"},
        {id: 2, text: "Family life"},
        {id: 3, text: "Box 3"},
        // Add more boxes as needed
    ]);

    const [results, setResults] = useState([])

    const moveBox = (fromIndex, toIndex) => {
        const newBoxes = [...boxes];
        const [movedBox] = newBoxes.splice(fromIndex, 1);
        newBoxes.splice(toIndex, 0, movedBox);
        setBoxes(newBoxes);
    };

    const handleGetResults = async () => {
        const response = await fetch('https://getpreferredtowns.azurewebsites.net/api/getPreferredTowns4', {
            method: 'POST',
            body: JSON.stringify({
                "minPrice": "25000",
                "maxPrice": "3000000",
                "desiredPostcodes": ["BS16 6TP"]
            }),
            headers: {
                'x-functions-key': 'bLxEjNxjIO-xL72mcq-HpG8QQak0GGfpwLN25pxUCAJYAzFuS47Wag==',
                Accept: 'application/json',
                'content-type': 'application/json'
            }
        })

        setResults(await response.json());
    }

    return (
        <div>
            <h2>Contact Page</h2>
            <p>Drag and drop to prioritize boxes:</p>

            {boxes.map((box, index) => (
                <Box
                    key={box.id}
                    index={index}
                    id={box.id}
                    text={box.text}
                    moveBox={moveBox}
                />
            ))}
            <button style={{
                backgroundColor: "#005EB8",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "8px",
            }} onClick={handleGetResults}>Get Results
            </button>
            {results.length > 0 && results.map(result => <div>{result.town}</div>)}
        </div>
    );
};

export default ContactPage;

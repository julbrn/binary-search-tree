import React, { useEffect, useState } from 'react';
const VisualizedTree = ({ root }) => {
    const [color, setColor] = useState(false);
    useEffect(() => {
        setColor(true);
        return () => {
            setTimeout(() => {
                setColor(false);
            }, 700);
        }
    }, [])

    function renderTree(node) {
        return Object.entries(node).map(([key, value]) => {
            if (key === 'left' && typeof value === 'object') {
                if (value !== null) {
                    return (
                        <li key={value.number}>
                            <VisualizedTree root={value} />
                        </li>
                    );
                }
                if (value === null) {
                    return null;
                }
            } else if (key === 'right' && typeof value === 'object') {
                if (value !== null) {
                    return (
                        <li key={value.number}>
                            <VisualizedTree root={value} />
                        </li>
                    );
                }
                if (value === null) {
                    return null;
                }
            }
        });
    }

    return root ? (
        <>
            <span className={color ? "tf-nc active" : "tf-nc"}>{root.number}</span>
            <ul>{renderTree(root)}</ul>
        </>
    ) : (
        ' '
    );
}

export default VisualizedTree;
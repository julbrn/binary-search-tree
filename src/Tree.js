function Tree(props) {
    const { number } = props;

    function renderTree(node) {
        return Object.entries(node).map(function ([key, value]) {
            if (key === 'left' && typeof value === 'object') {
                if (value !== null) {
                    return (
                        <li key={value.number}>
                            <Tree number={value} />
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
                            <Tree number={value} />
                        </li>
                    );
                }
                if (value === null) {
                    return null;
                }
            }
        });
    }

    return number ? (
        <>
            <span className="tf-nc">{number.number}</span>
            <ul>{renderTree(number)}</ul>
        </>
    ) : (
        'пусто'
    );
}

export { Tree };
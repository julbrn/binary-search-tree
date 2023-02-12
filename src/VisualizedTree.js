const VisualizedTree = ({ root }) => {

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
            <span className="tf-nc">{root.number}</span>
            <ul>{renderTree(root)}</ul>
        </>
    ) : (
        ' '
    );
}

export default VisualizedTree;
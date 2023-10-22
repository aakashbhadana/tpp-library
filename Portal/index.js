import { createPortal } from 'react-dom';

function Portal({children, id='html-body'}) {
    return (
        createPortal(children,document.getElementById(id))
    );
}

export default Portal;
import React from 'react';
import { createPortal } from 'react-dom';
import useConfirm from '../hooks/useConfirm';

const ConfirmDialog = () => {
    const { onConfirm, onCancel, confirmState } = useConfirm();

    const portalElement = document.getElementById('portal');
    const component = confirmState.show ? (
        <div className="portal-overlay">
            <div className="confirm-dialog">
                <p>{confirmState?.text && confirmState.text}</p>
                <div className="confirm-dialog__footer">
                    <div className="btn hover:bg-blue hover:text-white" onClick={onConfirm}>
                        Yes
                    </div>
                    <div className="btn hover:bg-red hover:text-white" onClick={onCancel}>
                        No
                    </div>
                </div>
            </div>
        </div>
    ) : null;

    return createPortal(component, portalElement);
};
export default ConfirmDialog;
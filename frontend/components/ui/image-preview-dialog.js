import styles from './image-preview-dialog.module.css'

export default function ImagePreviewDialog({imagePreview, setShowPreview}) {
    function hideDialog(e) {
        e.stopPropagation();

        if (e.target === e.currentTarget) {
            setShowPreview(false);
        }
    }

    return (
        <div
            className={styles['preview-dialog']}
            onClick={hideDialog}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
        >
            <img
                src={imagePreview}
                alt="Uploaded preview"
                style={{height: '15vw', userSelect: 'none', WebkitUserSelect: 'none'}}
            />
        </div>
    );
}
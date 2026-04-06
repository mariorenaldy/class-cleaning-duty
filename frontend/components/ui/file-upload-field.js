import ImagePreviewDialog from "./image-preview-dialog";
import {useRef, useState} from "react";

export default function FileUploadField() {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    function openUploadFileContext() {
        fileInputRef.current?.click();
    }

    function insertUploadedFile(e) {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);

        if (file.type.startsWith("image/")) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        } else {
            setImagePreview("");
        }
    }

    function showPreviewDialog() {
        if (!showPreview && imagePreview) {
            setShowPreview(true);
        }
    }

    return (
        <div className="content">
            <label htmlFor="uploaded-file-name">Uploaded File</label><br/>
            <input type="text" id="uploaded-file-name" disabled={true} value={fileName} />
            <button type="button" onClick={showPreviewDialog}>Preview</button><br/>

            <label htmlFor="file-name">File Name</label><br/>
            <input type="text" id="file-name" value={fileName} readOnly />
            <button type="button" onClick={openUploadFileContext}>Attach File</button><br/>
            <input type="file" name="file-data" ref={fileInputRef} hidden onChange={insertUploadedFile} />

            {imagePreview && showPreview && (
                <ImagePreviewDialog imagePreview={imagePreview} setShowPreview={setShowPreview} />
            )}
        </div>
    )
}
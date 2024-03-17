function almost_maximise(margin_v, margin_h) {
    const client = workspace.activeWindow;
    if (client.moveable) {
        const maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        const newWidth = maxArea.width - (margin_h || margin_v);
        const newHeight = maxArea.height - margin_v;
        client.frameGeometry = {
            x: maxArea.x + (maxArea.width - newWidth) / 2,
            y: maxArea.y + (maxArea.height - newHeight) / 2,
            width: newWidth,
            height: newHeight
        };
    }
}

registerShortcut(
    "CMax: almost maximise",
    "Almost maximise the active window",
    "Meta+Up",
    () => { almost_maximise(100); }
);
registerShortcut(
    "CMax: reasonable size",
    "Set \"reasonable\" size to the active window",
    "Meta+Shift+Up",
    () => { almost_maximise(200, 600); }
);


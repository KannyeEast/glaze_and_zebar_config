#Requires AutoHotkey v2.0
#SingleInstance Force

SetWinDelay 0

ToggleTaskbarVisibility()

ToggleTaskbarVisibility() {
    mainTray := "ahk_class Shell_TrayWnd"

    ; Use WinGetStyle function correctly
    if WinExist(mainTray) {
        hwnd := WinExist(mainTray)
        style := WinGetStyle(hwnd)

        WS_VISIBLE := 0x10000000
        if (style & WS_VISIBLE) {
            WinHide(mainTray)
        } else {
            WinShow(mainTray)
        }
    }
}

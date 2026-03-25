# TrustInn v1.2.0+ Installer - Smooth Installation Guide

## Installation Experience (Optimized)

### What Happens When You Run the Installer:

**Step 1: Welcome Screen** (Shows once)
- User sees welcome message
- Click "Next >"

**Step 2: Choose Installation Folder** (Single prompt)
- User selects where to install (e.g., `C:\Program Files\TrustInn`)
- Click "Install"

**Step 3: Installation Progress** (Automatic)
- Installer silently copies files
- Creates shortcuts automatically (no additional prompts)
- No more questions asked!

**Step 4: Finish** (Done!)
- Installation complete
- Option to launch app immediately

### ❌ NO MORE:
- ❌ Language selection dialogs
- ❌ Multiple feature selection screens
- ❌ Repeated "choose folder" prompts
- ❌ Shortcut confirmation dialogs

### ✅ USER GETS:
1. **One folder selection** - That's it!
2. **Automatic shortcuts** - Desktop + Start Menu created without asking
3. **Silent installation** - Fast and clean
4. **Automatic uninstaller** - Created in installation folder
5. **One-click launch** - Finish page offers to run app immediately

---

## Installer Features

| Feature | Status |
|---------|--------|
| Single installation directory choice | ✅ |
| Automatic Desktop shortcut | ✅ |
| Automatic Start Menu shortcut | ✅ |
| No language selection prompts | ✅ |
| Silent background installation | ✅ |
| Automatic uninstaller creation | ✅ |
| Auto-update checks after install | ✅ |
| Registry entries for reinstall detection | ✅ |
| Prevent multiple simultaneous installs | ✅ |

---

## What's Improved in v1.2.0+

### Before:
```
User Download
    ↓
Run installer
    ↓
Select Language ← ❌ Extra prompt
    ↓
Choose Folder (Prompt 1)
    ↓
Select Features ← ❌ Extra prompt
    ↓
Create Desktop Shortcut? ← ❌ Extra prompt
    ↓
Create Start Menu? ← ❌ Extra prompt
    ↓
Installing...
```

### After:
```
User Download
    ↓
Run installer
    ↓
Welcome Screen
    ↓
Choose Folder (Only 1 prompt!) ✅
    ↓
Installing... (Silent)
    ↓
Done! 🎉
```

---

## Technical Details (For Developers)

### NSIS Configuration:
```json
"nsis": {
  "oneClick": false,  // Show folder selection
  "allowToChangeInstallationDirectory": true,  // User can pick folder
  "allowMultipleInstallations": false,  // Block duplicate installs
  "createDesktopShortcut": true,  // Auto-create desktop icon
  "createStartMenuShortcut": true,  // Auto-create start menu
  "displayLanguageSelector": false,  // Skip language prompt ✅
  "installerLanguages": ["en_US"],  // English only
  "shortcutName": "TrustInn",  // Consistent naming
  "removeAppDataOnUninstall": true  // Clean uninstall
}
```

### Default Installation Path:
- **Windows:** `C:\Program Files\TrustInn`
- **Can be changed by user** during install

---

## First-Time User Experience

1. **Download** `TrustInn-1.2.0.exe` from releases
2. **Run** the installer (double-click)
3. **See** welcome screen → Click "Next"
4. **Choose** where to install (or use default)
5. **Click** "Install" button
6. **Wait** 30-60 seconds for installation
7. **See** success message → Click "Finish"
8. **✅ Done!** App is installed with:
   - Desktop shortcut
   - Start Menu entry
   - System uninstall support
   - Auto-update checking enabled

---

## Troubleshooting

### Q: Can I change the installation folder?
**A:** Yes! The installer shows the folder selection screen. Change it before clicking "Install".

### Q: Where are shortcuts created?
**A:** 
- Desktop shortcut named "TrustInn"
- Start Menu: Start → TrustInn → TrustInn.exe

### Q: Can I uninstall the app?
**A:** Yes! Control Panel → Programs and Features → Find "TrustInn" → Uninstall
- All files are automatically removed
- App data can be cleaned up if configured

### Q: Will it ask me to uninstall the old version?
**A:** No! If you reinstall, it will use the same folder automatically (registry detection).

---

## System Requirements

- **OS:** Windows 10 or later (x64)
- **RAM:** 2 GB minimum
- **Disk:** 100 MB for installation
- **Internet:** For auto-update checks only

---

## Installation Summary

✅ **Fastest installation setup available**
✅ **No confusing prompts or dialogs**
✅ **Professional Windows installer experience**
✅ **Automatic shortcuts and cleanup**
✅ **Built-in uninstall support**
✅ **Auto-update enabled by default**


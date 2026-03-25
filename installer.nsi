; TrustInn NSIS Installer Script
; This script provides a smooth installation experience with minimal prompts

!include "MUI2.nsh"
!include "x64.nsh"
!include "FileFunc.nsh"

; Basic Settings
Name "TrustInn"
OutFile "$%TEMP%\TrustInn-installer.exe"
InstallDir "$PROGRAMFILES\TrustInn"
InstallDirRegKey HKCU "Software\TrustInn" "InstallLocation"

; UI Settings
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_LANGUAGE "English"

; Section: Install Application
Section "Install"
  SetOutPath "$INSTDIR"
  File /r "${SOURCES}\*.*"
  
  ; Create shortcuts
  SetShellVarContext current
  CreateDirectory "$SMPROGRAMS\TrustInn"
  CreateShortcut "$SMPROGRAMS\TrustInn\TrustInn.lnk" "$INSTDIR\TrustInn.exe"
  CreateShortcut "$DESKTOP\TrustInn.lnk" "$INSTDIR\TrustInn.exe"
  CreateShortcut "$SMPROGRAMS\TrustInn\Uninstall TrustInn.lnk" "$INSTDIR\Uninstall.exe"
  
  ; Store installation path
  WriteRegStr HKCU "Software\TrustInn" "InstallLocation" "$INSTDIR"
  
  ; Create uninstaller
  WriteUninstaller "$INSTDIR\Uninstall.exe"
SectionEnd

; Section: Uninstall Application
Section "Uninstall"
  SetShellVarContext current
  Delete "$SMPROGRAMS\TrustInn\TrustInn.lnk"
  Delete "$SMPROGRAMS\TrustInn\Uninstall TrustInn.lnk"
  Delete "$DESKTOP\TrustInn.lnk"
  RMDir "$SMPROGRAMS\TrustInn"
  RMDir /r "$INSTDIR"
  DeleteRegKey HKCU "Software\TrustInn"
SectionEnd

; Function: Initialize installer
Function .onInit
  ; Skip language selection
  StrCpy $LANGUAGE 1033
  
  ; Check if already installed and upgrade
  ReadRegStr $0 HKCU "Software\TrustInn" "InstallLocation"
  ${If} $0 != ""
    StrCpy $INSTDIR $0
  ${EndIf}
FunctionEnd

export const shortcuts = [
    {
        id: "taskmgr",
        title: "Task Manager",
        icon: "./icons/taskmgr-00.png",
        command: "shell-exec taskmgr"
    },
    {
        id: "project",
        title: "New Project",
        icon: "./icons/py-00.png",
        command: "shell-exec python D:/03_tools/scripts/create_project/main.py -gui"
    },
    {
        id: "editcfg",
        title: "Edit Config",
        icon: "./icons/py-00.png",
        command: "shell-exec %userprofile%/.glzr/zebar/custom-zebar/vanilla/index.jsx"
    },
];
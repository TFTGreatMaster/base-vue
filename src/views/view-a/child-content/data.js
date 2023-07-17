// Define static config, example: table config
export const columns = [
  {
    title: "Tên",
    key: "name",
    dataIndex: "name",
    fixed: "left",
  },
  {
    title: "status",
    key: "status",
    dataIndex: "isActive",
    align: "center",
  },
  {
    title: "action",
    key: "action",
    component: "abc",
    actions: [
      {
        key: "a",
        onClick: (record) => {
          console.log("record", record);
        },
        tooltip: "gấu trúc",
        icon: {
          viewBox: "0 0 1024 1024",
          width: "1em",
          height: "1em",
          fill: "currentColor",
        },
      },
    ],
  },
];

export const demoData = [
  {
    name: "Nguyễn Thị Định",
    isActive: true,
  },
  {
    name: "Tạ Quảng Bửu",
    isActive: false,
  },
];

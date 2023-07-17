// Define static config, example: table config
import { h } from "vue";
import { ExportOutlined, EyeOutlined } from "@ant-design/icons-vue";
export const columns = [
  {
    title: "Tên",
    key: "name",
    dataIndex: "name",
    fixed: "left",
  },
  {
    title: "status",
    key: "type",
    align: "center",
  },
  {
    title: "action",
    key: "action",
    component: "abc",
    actions: [
      {
        key: "ExportOutlined",
        onClick: (record) => {
          console.log("record", record);
        },
        tooltip: "di chuyển",
        type: h(ExportOutlined),
      },
      {
        key: "EyeOutlined",
        onClick: (record) => {
          console.log("record", record);
        },
        tooltip: "chi tiết",
        type: h(EyeOutlined),
      },
    ],
  },
];

export const demoData = [
  {
    id: 24,
    name: "FB",
    type: "forder",
    url: null,
    path: "2",
  },
  {
    id: 28,
    name: null,
    type: "image/jpeg",
    url: "images\\hinh.jpg",
    path: "2/1",
  },
];

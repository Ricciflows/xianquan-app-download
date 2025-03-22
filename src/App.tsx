import "./App.css";
import "@ant-design/v5-patch-for-react-19";
import { Button, ConfigProvider, Image, Typography } from "antd";
import Logo from "../public/manitori.png";
import apk from "../public/弦圈-V0.0.2-正式版.apk?url";

function App() {
  const { Title } = Typography;

  async function Download() {
    const a = document.createElement("a"); //创建一个<a></a>标签
    a.href = apk;
    //给a标签的href属性值加上地址，注意，这里是绝对路径，不用加 点.
    a.download = "弦圈_V0.0.2_正式版.apk";
    //设置下载文件文件名，这里加上.xlsx指定文件类型，pdf文件就指定.fpd即可
    a.style.display = "none"; // 障眼法藏起来a标签
    document.body.appendChild(a);
    // 将a标签追加到文档对象中
    a.click(); //模拟点击了a标签，会触发a标签的href的读取，浏览器就会自动下载了
    a.remove();
    // 一次性的，用完就删除a标签
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a href="https://www.xianquan.net">
        <Image
          src={Logo}
          width={300}
          height={100}
          style={{ objectFit: "cover" }}
          preview={false}
        ></Image>
      </a>
      <Title level={2}>V0.0.2</Title>

      <Title>🚀下载弦圈APP🎉</Title>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff6b81",
          },
        }}
      >
        <Button type="primary" size="large" onClick={Download}>
          立即下载
        </Button>
      </ConfigProvider>
    </div>
  );
}

export default App;

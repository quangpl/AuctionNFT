import { useState, useEffect } from "react";
import { Image, Divider, Tabs } from "antd";
import "../css/profile.css";
import { NFTItem } from "../components/NFT";
import { useAppContext } from "../context/app/context";
import axios from "axios";
import { SERVER_URL } from "../constants";
const Profile = () => {
  const [items, setItems] = useState<any[]>();
  const initialState = "Copy";
  const [buttonText, setButtonText] = useState("Copy"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
  const appContext = useAppContext();

  const getItems = async () => {
    const data = await axios.get(
      `${SERVER_URL}/tokens/user/${appContext.state.account}`
    );
    setItems(data.data);
  };
  // the effect
  useEffect(() => {
    getItems();
    if (buttonText !== initialState) {
      setTimeout(() => setButtonText(initialState), 1000);
    }
  }, [buttonText]);
  console.log(appContext.state);
  const changeText = (text: any) => {
    setButtonText(text);
    var id = document.getElementById("idMetamask")?.innerHTML;
    console.log(id?.toString());
    const textId = new String(id?.toString());
    navigator.clipboard.writeText(textId.toString());
  };
  return (
    <div className="profile">
      <Divider
        orientation="center"
        style={{
          backgroundColor: "rgba(255, 255, 255, .01)",
          paddingTop: 30,
          paddingBottom: 30,
          fontSize: 30,
          borderBottom: "solid 1px  rgba(255, 255, 255, .1)",
        }}
      >
        <Image
          preview={{ visible: false }}
          style={{ borderRadius: "50%" }}
          width={200}
          src={"https://joeschmoe.io/api/v1/random"}
        />
        <p>{appContext.state.account}</p>
        <button id="btnCopy" onClick={() => changeText("Copied")}>
          {buttonText}
        </button>
      </Divider>
      <div className="card-container">
        {items?.map((i, idx) => (
          <NFTItem {...i} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default Profile;

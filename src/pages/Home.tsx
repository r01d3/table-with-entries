import React from "react";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { Table } from "../components";
import "./Home.scss";
import { homePageText } from "../utils/constants";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAddNewEntry = () => {
    navigate("/add");
  };
  return (
    <div className="home-container">
      <Flex gap="small" align="center">
        <h1>{homePageText.title}</h1>
        <Button type="primary" onClick={() => handleAddNewEntry()}>
          {homePageText.addNewEntryBtn}
        </Button>
      </Flex>
      <div className="home-container__table">
        <Table />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import "./Home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAddNewEntry = () => {
    navigate("/add");
  };
  return (
    <div className="home-container">
      <Flex gap="small" align="center">
        <h1>Entries</h1>
        <Button type="primary" onClick={() => handleAddNewEntry()}>
          Add new entry
        </Button>
      </Flex>
      <Table />
    </div>
  );
};

export default Home;

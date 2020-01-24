import React, { useEffect, useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import Tree from "react-d3-tree";

import { contexts } from "../store/contexts.data";
import { functions } from "../store/functions.data";
import { ServicesContext } from "../contexts/services.context";

interface TreeVisProps extends RouteComponentProps {}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: inherit;
`;

const Title = styled.h2`
  font-size: 1.375rem;
  color: black;
  font-weight: 400;
  margin-bottom: 60px;
  cursor: pointer;
`;

const Description = styled.span`
  font-size: 2rem;
  color: black;
  font-weight: 500;
  margin-bottom: 40px;
`;

const TreeVisPage = (props: TreeVisProps) => {
  const { history } = props;
  const { getRankedServices } = useContext(ServicesContext);

  const getServiceNode = (goal: string, hindrances: string[]) => {
    return getRankedServices(goal, hindrances).map((service: any) => {
      return {
        name: service.name,
        styles: {},
        nodeSvgShape: {
          shape: "rect",
          shapeProps: {
            width: 20,
            height: 20,
            x: -10,
            y: -10,
            fill: "#6FE9FF",
            stroke: "none"
          }
        },
        textLayout: {
          textAnchor: "start",
          x: 16,
          y: 0,
          transform: "scale(0.8)"
        }
      };
    });
  };

  const [data, setData] = useState<any>([
    {
      name: "Mål",
      children: contexts.map((conObj: any) => {
        return {
          name: conObj.text,
          textLayout: {
            textAnchor: "start",
            x: -10,
            y: -30,
            transform: "scale(0.8)"
          },
          children: conObj.hindrances.length
            ? conObj.hindrances.map((childObj: any) => {
                return {
                  name: childObj,
                  children: getServiceNode(conObj.id, [childObj])
                };
              })
            : getServiceNode(conObj.id, [])
        };
      })
    }
  ]);

  /*  useEffect(() => {
    setData({
      name: "Parent",
      children: [
        {
          name: "Child One"
        },
        {
          name: "Child Two",
          children: [
            {
              name: "YOLO",
              children: [
                { name: "Komme meg rundt utenfor hjemmet" },
                { name: "Komme meg rundt i hjemmet" }
              ]
            },
            { name: "DOLO" }
          ]
        },
        {
          name: "Child Two",
          children: [{ name: "YOLO" }, { name: "DOLO" }]
        }
      ]
    });
  }, []); */

  /* useEffect(() => {
    setData([
      {
        name: "Mål",
        children: contexts.map((conObj: any) => {
          return {
            name: conObj.text,
            children: conObj.hindrances.length
              ? conObj.hindrances.map((childObj: any) => {
                  return {
                    name: childObj,
                    children: getRankedServices(conObj.id, []).map(
                      (service: any) => {
                        return { name: service.name };
                      }
                    )
                  };
                })
              : getRankedServices(conObj.id, []).map((service: any) => {
                  return { name: service.name };
                })
          };
        })
      }
    ]);
  }, []); */

  return (
    <ColumnContainer>
      <Title onClick={() => history.push("/")}>
        Tilbake til startsiden
      </Title>
      <Description>
        Her ser du en tre-struktur over hvordan mål, hindringer og
        tjenester henger sammen.
      </Description>
      <div
        id="treeWrapper"
        style={{
          width: "100%",
          height: "180vh",
          backgroundColor: "#FFF"
        }}
      >
        <Tree
          data={data}
          initialDepth={2}
          shouldCollapseNeighborNodes={true}
          styles={{
            links: {
              stroke: "blue",
              strokeWidth: 1
            }
          }}
        />
      </div>
    </ColumnContainer>
  );
};

export default TreeVisPage;

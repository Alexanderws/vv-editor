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

const GoalIcon = styled.div`
  border-radius: 50%;
  background-color: #2a2859;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const HindranceIcon = styled.div`
  border-radius: 50%;
  background-color: #ff8274;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 20px;
`;

const ServiceIcon = styled.div`
  background-color: #6fe9ff;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 20px;
`;

const TreeVisPage = (props: TreeVisProps) => {
  const { history } = props;
  const { getRankedServices } = useContext(ServicesContext);

  const getServiceNodes = (goal: string, hindrances: string[]) => {
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

  const getHindranceNode = (goal: string, hindranceId: string) => {
    return {
      name: functions.find(
        (hindranceObj: any) => hindranceObj.id === hindranceId
      ).text,
      children: getServiceNodes(goal, [hindranceId]),
      nodeSvgShape: {
        shape: "circle",
        shapeProps: {
          r: 10,
          cx: 0,
          cy: 0,
          fill: "#FF8274",
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
  };

  const [data, setData] = useState<any>([
    {
      name: "Alle mål",
      nodeSvgShape: {
        shape: "circle",
        shapeProps: {
          r: 10,
          cx: 0,
          cy: 0,
          fill: "#2A2859",
          stroke: "none"
        }
      },
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
                return getHindranceNode(conObj.id, childObj);
              })
            : getServiceNodes(conObj.id, []),
          nodeSvgShape: {
            shape: "circle",
            shapeProps: {
              r: 10,
              cx: 0,
              cy: 0,
              fill: "#2A2859",
              stroke: "none"
            }
          }
        };
      }),
      textLayout: {
        textAnchor: "start",
        x: -12,
        y: -26,
        transform: "scale(0.8)"
      }
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
        style={{
          display: "flex",
          marginBottom: "20px",
          alignItems: "center"
        }}
      >
        <GoalIcon /> Mål
        <HindranceIcon />
        Hindring
        <ServiceIcon />
        Tjeneste
      </div>
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
          initialDepth={1}
          shouldCollapseNeighborNodes={true}
          depthFactor={250}
          zoom={0.8}
          scaleExtent={{ min: 0.6, max: 1 }}
          styles={{
            links: {
              stroke: "#F9C66B",
              strokeWidth: 1
            }
          }}
        />
      </div>
    </ColumnContainer>
  );
};

export default TreeVisPage;

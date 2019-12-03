import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

import ActionButton from "../components/action-button.component";

import { AppContext } from "../contexts/app.context";
import { ServicesContext } from "../contexts/services.context";
import { Service, TREATMENT } from "../store/services.data";
import { contexts } from "../store/contexts.data";
import { functions } from "../store/functions.data";

interface EditServiceProps extends RouteComponentProps {}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
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
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 700px;
`;

const ContextContainer = styled.div`
  padding: 10px 5px;
  max-height: 210px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column wrap;
  align-content: stretch;
  background-color: #f1f1f1;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 4px;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  height: 34px;
  width: 100%;
  font-size: 1rem;
  padding: 0px 4px;
  border: solid 1px black;
`;

const TextArea = styled.textarea`
  height: 102px;
  width: 100%;
  padding: 4px;
  font-size: 1rem;
  border: solid 1px black;
  resize: none;
`;

const ErrorMessage = styled.div`
  margin-top: 4px;
  background-color: #ff8274;
  font-weight: 500;
  font-size: 0.85rem;
  color: white;
  border-radius: 3px;
  padding: 8px 8px 6px;
`;

const SegmentedButton = styled.input`
  height: 40px;
  line-height: 40px;
  border: solid 1px black;
  font-size: 1rem;
  min-width: 0;
  text-transform: capitalize;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  flex-grow: 1;
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: none;
  }

  ${({ checked }) =>
    checked ? "color: white; background-color: black;" : ""};
`;

const SegmentedButtonSmall = styled.input`
  height: 28px;
  line-height: 28px;
  border: solid 1px black;
  font-size: 1rem;
  min-width: 0;
  text-transform: capitalize;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  flex-grow: 1;
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: none;
  }

  ${({ checked }) =>
    checked ? "color: white; background-color: black;" : ""};
`;

interface FormProps {
  form: any;
  setForm?: any;
  formErrors: any;
  setFormErrors: any;
  setCurrentPage?: any;
  addService?: any;
}

const OverviewForm = ({
  form,
  setForm,
  formErrors,
  setFormErrors
}: FormProps) => {
  const handleContextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.currentTarget.value;
    if (form.contexts.includes(value)) {
      setForm({
        ...form,
        contexts: form.contexts.filter(
          (context: string) => context !== value
        )
      });
    } else {
      setForm({
        ...form,
        contexts: [...form.contexts, value]
      });
    }
  };

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget;
    setForm({
      ...form,
      [target.name]: target.value
    });
  };

  return (
    <React.Fragment>
      <FormGroup>
        <Label htmlFor="name">Tittel/navn på tilbud</Label>
        <TextInput
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
        {formErrors.name ? (
          <ErrorMessage>Du må angi et navn på tilbudet</ErrorMessage>
        ) : (
          ""
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Beskrivelse</Label>
        <TextArea
          name="description"
          value={form.description}
          onChange={handleInputChange}
          maxLength={400}
        />
        {formErrors.description ? (
          <ErrorMessage>
            Du må angi en beskrivelse for tilbudet
          </ErrorMessage>
        ) : (
          ""
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="moreInformationURL">URL/lenke til nettsted</Label>
        <TextInput
          type="text"
          name="moreInformationURL"
          value={form.moreInformationURL}
          onChange={handleInputChange}
        />
        {formErrors.moreInformationURL ? (
          <ErrorMessage>Du må angi en lenke for tilbudet</ErrorMessage>
        ) : (
          ""
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="treatment">Tilbudet er primært</Label>
        <RowContainer style={{ height: "48px" }}>
          <SegmentedButton
            value={TREATMENT.kompenserende}
            type="button"
            name="treatment"
            checked={form.treatment === TREATMENT.kompenserende}
            onClick={handleInputChange}
          />
          <SegmentedButton
            value={TREATMENT.behandlende}
            type="button"
            name="treatment"
            checked={form.treatment === TREATMENT.behandlende}
            onClick={handleInputChange}
          />
          <SegmentedButton
            value={TREATMENT.forebyggende}
            type="button"
            name="treatment"
            checked={form.treatment === TREATMENT.forebyggende}
            onClick={handleInputChange}
          />
        </RowContainer>
        {formErrors.treatment ? (
          <ErrorMessage>
            Du må angi hva slags type behandling tilbudet gir
          </ErrorMessage>
        ) : (
          ""
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="contexts">
          Tilbudet er relevant for følgende mål
        </Label>
        <ContextContainer>
          {contexts.map((context: any) => {
            return (
              <label
                key={context.id}
                style={{
                  display: "flex",
                  maxWidth: "320px",
                  marginBottom: "8px"
                }}
              >
                <input
                  type="checkbox"
                  name="contexts"
                  value={context.id}
                  checked={form.contexts.includes(context.id)}
                  onChange={handleContextChange}
                  style={{ marginRight: "4px" }}
                />
                {context.text}
              </label>
            );
          })}
        </ContextContainer>
        {formErrors.contexts ? (
          <ErrorMessage>
            Du må angi minst et mål som er relevant for tilbudet
          </ErrorMessage>
        ) : (
          ""
        )}
      </FormGroup>
    </React.Fragment>
  );
};

const ObstacleForm = ({
  form,
  setForm,
  formErrors,
  setFormErrors
}: FormProps) => {
  const ContextContainerSmall = styled.div`
    padding: 4px;
    display: flex;
    background-color: #f1f1f1;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 4px;
    margin-left: 4px;
  `;

  const FunctionContainer = styled.div`
    padding: 4px;
    display: flex;
    background-color: #f1f1f1;
    font-weight: 500;
    margin-bottom: 4px;
  `;

  const handleHindranceClick = (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget;
    const newScore =
      target.value === "Høy" ? 2 : target.value === "Mild" ? 1 : 0;
    const targetName = target.name;
    const exists = form.functions.some(
      (functionObj: any) => functionObj.name === targetName
    );
    if (newScore === 0) {
      if (exists) {
        setForm({
          ...form,
          functions: form.functions.filter(
            (funcObj: any) => funcObj.name !== targetName
          )
        });
      }
    } else {
      if (exists) {
        setForm({
          ...form,
          functions: form.functions.map((funObj: any) => {
            if (funObj.name === targetName) {
              return { name: funObj.name, score: newScore };
            }
            return funObj;
          })
        });
      } else {
        setForm({
          ...form,
          functions: [
            ...form.functions,
            { name: targetName, score: newScore }
          ]
        });
      }
    }
  };

  const relevantFunctionLists: any[] = contexts
    .filter((context: any) => form.contexts.includes(context.id))
    .map((context: any) => context.hindrances);

  const relevantFunctions: string[] = [
    ...new Set(relevantFunctionLists[0].concat(...relevantFunctionLists))
  ] as string[];

  return (
    <React.Fragment>
      <FormGroup>
        <RowContainer>
          <span style={{ padding: "4px 0", whiteSpace: "nowrap" }}>
            <Label>Valgte mål:</Label>
          </span>
          <RowContainer style={{ flexWrap: "wrap" }}>
            {form.contexts.map((context: any) => {
              return (
                <ContextContainerSmall key={context}>
                  {
                    contexts.find((conObj: any) => conObj.id === context)
                      .text
                  }
                </ContextContainerSmall>
              );
            })}
          </RowContainer>
        </RowContainer>
      </FormGroup>
      <FormGroup>
        <Label>
          Sett i forhold til målene som er valgt, hvor relevant er
          tilbudet{" "}
          <span style={{ fontStyle: "italic" }}>{form.name}</span> for
          disse hindringene?
        </Label>
      </FormGroup>
      <FormGroup>
        <RowContainer>
          <Label style={{ width: "70%" }}>Hindring</Label>
          <Label style={{ width: "30%" }}>Relevans</Label>
        </RowContainer>
        <ColumnContainer>
          {relevantFunctions.map((functionId: string) => {
            return (
              <FunctionContainer
                key={functionId}
                style={{ alignItems: "baseline" }}
              >
                <Label style={{ width: "70%" }}>
                  {
                    functions.find(
                      (funcObj: any) => funcObj.id === functionId
                    ).text
                  }
                </Label>
                <RowContainer style={{ height: "27px", width: "30%" }}>
                  <SegmentedButtonSmall
                    type="button"
                    name={functionId}
                    value="Ingen"
                    onClick={handleHindranceClick}
                    checked={
                      form.functions.some(
                        (funObj: any) =>
                          funObj.name === functionId && funObj.score === 0
                      ) ||
                      !form.functions.some(
                        (funObj: any) => funObj.name === functionId
                      )
                    }
                  />
                  <SegmentedButtonSmall
                    type="button"
                    name={functionId}
                    value="Mild"
                    onClick={handleHindranceClick}
                    checked={form.functions.some(
                      (funObj: any) =>
                        funObj.name === functionId && funObj.score === 1
                    )}
                  />
                  <SegmentedButtonSmall
                    type="button"
                    name={functionId}
                    value="Høy"
                    onClick={handleHindranceClick}
                    checked={form.functions.some(
                      (funObj: any) =>
                        funObj.name === functionId && funObj.score === 2
                    )}
                  />
                </RowContainer>
              </FunctionContainer>
            );
          })}
        </ColumnContainer>
      </FormGroup>
    </React.Fragment>
  );
};

const EditServicePage = (props: EditServiceProps) => {
  const { history, location } = props;
  const { setHasMadeChange } = useContext(AppContext);
  const {
    addService,
    updateService,
    isEditing,
    activeService,
    setActiveService
  } = useContext(ServicesContext);
  const [formErrors, setFormErrors] = useState<any>({
    name: false,
    description: false,
    treatment: false,
    moreInformationURL: false,
    contexts: false,
    functions: false
  });
  const [form, setForm] = useState<Service>(
    isEditing
      ? activeService
      : {
          id: "",
          name: "",
          description: "",
          treatment: "",
          moreInformationURL: "",
          contexts: [],
          functions: []
        }
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const validateForm = () => {
    setFormErrors({
      name: form.name ? false : true,
      treatment: form.treatment ? false : true,
      contexts: form.contexts.length ? false : true
    });

    return form.name && form.treatment && form.contexts.length;
  };

  const resetEditing = () => {
    setActiveService(false, null);
  };

  const handleNextClicked = () => {
    if (currentPage === 1) {
      if (validateForm()) {
        setCurrentPage(2);
      }
    }
    if (currentPage === 2) {
      if (validateForm()) {
        if (isEditing) {
          updateService(form);
          console.log("LOLOLOL");
        } else {
          const newService: Service = {
            id: form.name,
            ...form
          };
          addService(newService);
        }
        setHasMadeChange(true);
      }
      resetEditing();
      history.push("/");
    }
  };

  const handlePreviousClicked = () => {
    if (currentPage === 1) {
      //resetEditing();
      history.push("/");
    }
    if (currentPage === 2) {
      setCurrentPage(1);
    }
  };

  return (
    <ColumnContainer>
      <Title onClick={() => history.goBack()}>
        Tilbake til startsiden       
      </Title>
      <Description>
        {form.name || isEditing
          ? `Rediger tilbud: ${form.name}`
          : "Opprett et nytt tilbud"}
      </Description>
      <FormContainer>
        {currentPage === 1 ? (
          <OverviewForm
            form={form}
            formErrors={formErrors}
            setForm={setForm}
            setFormErrors={setFormErrors}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <ObstacleForm
            form={form}
            setForm={setForm}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        )}
        <ButtonRow>
          <ActionButton secondary onClick={handlePreviousClicked}>
            {currentPage === 1 ? "Avbryt" : "Gå til forrige steg"}
          </ActionButton>
          <ActionButton onClick={handleNextClicked}>
            {currentPage === 1
              ? "Gå til neste steg"
              : "Dette ser bra ut, lagre!"}
          </ActionButton>
        </ButtonRow>
      </FormContainer>
    </ColumnContainer>
  );
};

export default EditServicePage;

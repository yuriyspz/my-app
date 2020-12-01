import { connect } from "react-redux";
import React, { Dispatch } from "react";
import { Actions, AddAction, AddFormWork, FormWork } from "./store";
import { ThunkDispatch } from "redux-thunk";

export interface DispatchProps{
  dispatchInput: (text: FormWork)=> any
}

export class FormComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  public handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: e.target.value });
  };
  public handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(this.state.inputValue)
    this.props.dispatchInput({text: this.props.values})
  };
  render(): JSX.Element {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="inputValue"
            onChange={(e) => this.handleInputChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    values: state.inputValue
  };
};
const mapDispatchToProps = (
  dispatch: any
) => {
  return {
    dispatchInput: (formwork: any) => dispatch(AddFormWork(formwork))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);

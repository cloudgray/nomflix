import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";
import Message from "../../Components/Message";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    aringToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error: "Can't find movie information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { topRated, popular, aringToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        aringToday={aringToday}
        loading={loading}
        error={error}
      />
    );
  }
}
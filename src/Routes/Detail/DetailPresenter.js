import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, loading, error }) => null;

DetailPresenter.proptypes = {
  result: Proptypes.object,
  loading: Proptypes.string,
  error: Proptypes.func.isRequired
};

export default DetailPresenter;

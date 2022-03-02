import React, { Fragment, FunctionComponent } from "react";
import { Page, FlexPane, SubHeader, CenterPane, Loading } from "../../common";
import { useNavigate } from "react-router-dom";

import { useUsers } from "../../hooks";
import { Search } from "@trussworks/react-uswds";

export const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { data, fetch, isLoading } = useUsers();

  const onSubmit = (value: any) => {
    fetch();
    navigate({
      search: `?search=${value}`,
    });
  };

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <h3>Welcome to Demo App</h3>
          <p>A mock page that uses mock data.</p>
        </div>
        <div>
          <Search
            placeholder="Search for users"
            size="small"
            onSubmit={onSubmit}
          />
        </div>

        {isLoading && (
          <CenterPane>
            <Loading />
          </CenterPane>
        )}

        {data.map(({ id, firstName, lastName, avatar }: any) => (
          <FlexPane key={id}>
            {avatar && <img src={avatar} alt={firstName} />}
            <p>
              {firstName} {lastName}
            </p>
          </FlexPane>
        ))}
      </Page>
    </Fragment>
  );
};

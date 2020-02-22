/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col 
} from "reactstrap";

class TrailerScreen extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Trailer Screen</CardTitle>
                </CardHeader>
                <CardBody>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4"></CardTitle>
                  <p className="card-category">
                 
                  </p>
                </CardHeader>
                <CardBody>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default TrailerScreen;

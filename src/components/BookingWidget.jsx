import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/index.js';

const CustomYclientsWidget = () => {
  const dispatch = useDispatch();
  const { isShow } = useSelector((state) => state.widget);
  const handleWidgetClose = () => {
    dispatch(actions.widgetClose());
  };

  return (
    <div>
      <Offcanvas
        show={isShow}
        onHide={handleWidgetClose}
        placement="end"
        className="offcanvas-widget"
      >
        <Offcanvas.Header closeButton className="ms-auto" />
        <Offcanvas.Body className="p-0 m-0">
          <iframe
            title="Yclients Form"
            src="https://n984073.yclients.com/"
            width="100%"
            height="100%"
            className="p-0 m-0"
          />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CustomYclientsWidget;

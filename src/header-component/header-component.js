import React, {PropTypes} from 'react';
import {Header,Icon} from 'semantic-ui-react'

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Header style={{color:"white"}} as='h2' icon>
              <Icon name='tasks' />
              Lista de Tareas
              <Header.Subheader style={{color:"white"}}>
                Ejemplo Introducción a React
              </Header.Subheader>
            </Header>
          );
  }
}

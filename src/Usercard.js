import React, { Component } from 'react'
import printMonth from './month'
import './App.css'
import { Col, Row, Grid } from 'react-bootstrap'
const month = printMonth()

class Usercard extends Component {
  componentDidMount () {
    console.log('Mounted: ', this.props.alltime.length, this.props.recent.length)
  }
  render () {
    let sortAll = this.props.alltime
    if (this.props.alltimeToggle) {
      sortAll.sort((a, b) => parseFloat(b.alltime) - parseFloat(a.alltime))
    } else {
      sortAll = this.props.recent.sort((a, b) => parseFloat(b.recent) - parseFloat(a.recent))
    }
    return (
      sortAll.map((item, index) => {
        return (
          <Grid className='Usercard' key={item.username} xs={8}>
            <Row className='userTitle' xs={12}>
              <Col xs={10}>
                <a href={'https://www.freecodecamp.org/' + item.username}><h1>{item.username}</h1></a>
              </Col>
              <Col xs={2}>
                <h1 className='ranking'>{index + 1}</h1>
              </Col>
            </Row>
            <Row className='info' xs={12}>
              <Col xs={6}>
                <a href={'https://www.freecodecamp.org/' + item.username}><img src={item.img} width='50%'height='auto' alt={item.username} /></a>
              </Col>
              <Col xs={6} className='numbers'>
                {this.props.alltimeToggle ? item.alltime + ' Points in Total' : item.recent + ' Points in ' + month}
              </Col>
            </Row>
          </Grid>
        )
      })
    )
  }
}
export default Usercard

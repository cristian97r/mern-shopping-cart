import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemsActions'

class ItemModal extends Component {

  state = {
    modal: false,
    name: ''
  }

  toogle = () => {
    this.setState({ modal: !this.state.modal })
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  onSubmit = (event) => {
    event.preventDefault()

    const newItem = {
      name: this.state.name
    }

    this.props.addItem(newItem)
    
    this.setState({modal: false})
  }

  render() {
    return (
      <div>
        <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toogle}>Add Item</Button>
        <Modal isOpen={this.state.modal} toggle={this.toogle}>
          <ModalHeader toogle={this.toogle}>Add To Your Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input type="text" name="name" id="item" placeholder="Add an item" onChange={this.onChange} />
                <Button color="dark" style={{marginTop: '2rem'}} block >Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal)

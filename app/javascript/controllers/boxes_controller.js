import { Controller } from "stimulus"
import StimulusReflex from 'stimulus_reflex';
import { debounce } from 'lodash-es'
import serializeForm from 'form-serialize'

import Rails from '@rails/ujs'

export default class extends Controller {
  static targets = [ "form", "boxDiv", "colorPicker", "richText", "name" ]

  connect() {
    StimulusReflex.register(this)
    this.submit = debounce(this.submit, 500)
  }

  formData() {
    return serializeForm(
      this.formTarget,
      {
        hash: true,
        empty: true
      }
    )
  }

  submit(event) {
    event.preventDefault()
    Rails.fire(this.formTarget, "submit")
  }

  updateColor() {
    this.boxDivTarget.style.backgroundColor = this.formData().box.color
    this.colorPickerTarget.style.backgroundColor = this.formData().box.color

    if (this.formData().box.name) {
      this.nameTarget.style.borderColor = 'transparent'
      this.richTextTarget.style.borderColor = 'transparent'
    }
  }
}

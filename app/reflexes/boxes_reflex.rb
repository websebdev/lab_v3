class BoxesReflex < ApplicationReflex
  # def submit(sent_params = nil)
  #   request.env["action_dispatch.request.parameters"] = sent_params if sent_params

  #   if box = GlobalID::Locator.locate_signed(element.dataset.dig("signed-id"))
  #     box.assign_attributes(box_params)
  #     box.save
  #     @halted = true
  #   end
  # end

  # private

  # def box_params
  #   params.require(:box).permit(:name, :color, boxable_attributes: [:id, :rich_text])
  # end
end
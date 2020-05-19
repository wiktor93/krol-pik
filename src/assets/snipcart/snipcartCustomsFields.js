const snipcartCustomFields = `
  <billing section="bottom">
    <fieldset class="snipcart-form__set">
      <div className="snipcart-form__field">
        <snipcart-label  class="snipcart__font--tiny"   for="phone"  >
            Nr telefonu
            </snipcart-label>
          <snipcart-input name="phone"></snipcart-input>
      </div>
    </fieldset>
    <fieldset class="snipcart-form__set">
      <div class="snipcart-form__field">
        <div class="snipcart-form__field-checkbox">
          <snipcart-checkbox name="subscribeToNewsletter"></snipcart-checkbox>
          <snipcart-label
            class="snipcart__font--tiny snipcart-form__label--checkbox"
            for="subscribeToNewsletter"
          >
            Chcę otrzymywać informacje o promocjach.
          </snipcart-label>
        </div>
      </div>
    </fieldset>
      </billing>
  `

module.exports = snipcartCustomFields

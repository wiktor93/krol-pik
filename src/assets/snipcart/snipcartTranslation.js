module.exports = snipcartTranslation = {
  actions: {
    edit: "Edytuj",
    cancel: "Anuluj",
    continue_shopping: "Kontynuuj zakupy",
    back_to_checkout: "Powrót do kasy",
    checkout: "Zamówienie",
    apply: "Zatwierdź",
    type_address: "Wprowadź adres",
    use_this_address: "Użyj tego adresu",
    back_to_store: "Wróć do sklepu",
    close_cart: "Zamknij koszyk",
    show: "Pokaż",
    hide: "Ukryj",
    apply_changes: "Zapisz zmiany",
  },
  header: {
    title_cart_summary: "Podsumowanie koszyka",
    loading: "Ładowanie...",
  },
  item: {
    quantity: "Ilość",
    quantity_short: "Szt",
    decrement_quantity: "Zwiększ ilość",
    increment_quantity: "Zmniejsz ilość",
    remove_item: "Usuń przedmiot",
  },
  cart: {
    subtotal: "Kwota częściowa",
    shipping_taxes_calculated_at_checkout:
      "Przejdź dalej, aby sprawdzić koszty wysyłki",
    loading: "Przygotowujemy twój koszyk...",
    secured_by: "Secured by Snipcart",
    summary: "Podsumowanie zamówienia",
    empty: "Twój koszyk jest pusty.",
    invoice_number: "Numer faktury",
  },
  order: {
    loading: "Przygotowujemy szczegóły twojego zamówienia...",
  },
  discount_box: {
    promo_code: "Kod promocyjny?",
    promo_code_placeholder: "Wprowadź kod",
    promocode_applied: "Kod został zaakceptowany",
  },
  address_form: {
    name: "Imię i nazwisko",
    email: "Email",
    address1: "Ulica",
    address2: "Nr domu / mieszkania",
    city: "Miasto",
    country: "Kraj",
    postalCode: "Kod pocztowy",
    province: "Województwo",
    dont_see_address: "Nie widzę swojego adresu",
  },
  billing: {
    title: "Dane osobowe",
    address: "Adres",
    continue_to_shipping: "Kontynuuj zakupy",
    use_different_shipping_address: "Uzyj innego adresy do wysyłki",
  },
  customer: {
    information: "Customer information",
  },
  customer_dashboard: {
    my_account: "My account",
    ordered_on: "Ordered on",
    total: "Total",
    status: "Status",
    order: "Order %{invoice_number}",
    order_details: "Order details",
    loading: "Loading...",
    no_orders: "No orders found.",
    sign_out: "Sign out",
    show_more_orders:
      "Show %{smart_count} more order |||| Show %{smart_count} more orders",
  },
  signin_form: {
    signin: "Zaloguj",
    dont_have_an_account: "Nie posiadasz konta?",
    email: "Email",
    password: "Hasło",
    forgot_your_password: "Zapomniałeś hasła?",
    close_form: "Powrót",
  },
  register_form: {
    register: "Rejestracja",
    already_have_an_account: "Posiadasz już konto?",
    email: "Email",
    password: "Hasło",
    confirm_password: "Potwierdź hasło",
  },
  guest_checkout: {
    or: "lub",
    continue_as_a_guest: "Kontynuuj jako gość",
  },
  shipping: {
    title: "Wysyłka",
    shipping_to: "Shipping to:",
    address: "Shipping address",
    method: "Shipping method",
  },
  payment: {
    form: {
      deferred_payment_title: "Deferred Payment",
      deferred_payment_instructions:
        "By placing this order, you agree to pay later through the payment method identified by the merchant.",
      card_label: "Credit card",
      card_number: "Card number",
      card_expiration: "MM/YY",
      card_cvv: "CVV",
      card_postal_code: "Postal code",
    },
    still_pending_notice: "Your payment is still being processed.",
    title: "Payment",
    continue_to_payment: "Continue to payment",
    credit_card: "Credit card",
    place_order: "Place order",
    preparing_payment_session: "Preparing payment...",
    processing_payment: "Processing payment...",
    checkout_with: "Checkout with",
    checkout_with_method: "Checkout with %{method}",
    method_icon: "%{method} icon",
    no_payment: "No payment is required for this order.",
    methods: {
      card: "Credit card",
      paypal: "PayPal",
      paypal_express_checkout: "PayPal",
      apple_pay: "Apple Pay",
      bancontact: "Bancontact",
      belfius: "Belfius",
      eps: "Electronic Payment Standard",
      giropay: "Giropay",
      ideal: "iDEAL",
      ing_home_pay: "ING Home’Pay",
      kbc: "KBC",
      klarna_pay_later: "Klarna pay later",
      klarna_slice_it: "Klarna monthly financing",
      p24: "Przelewy24",
      sepa_debit: "SEPA bank transfer",
      sofort: "Sofort bank transfer",
      deferred_payment: "Pay later",
    },
  },
  discounts: {
    title: "Zniżki",
  },
  cart_summary: {
    total: "Razem",
    subtotal: "Kwota częściowa",
    shipping: "Koszty dostawy",
    discount: "Zniżki",
    quantity: "x",
  },
  errors: {
    default: "Wystąpił bląd. Spróbój później lub skontaktuj się z nami.",
    promo_code_is_invalid: "Ten kod promocyjny jest nieprawidłowy.",
    promocode_already_in_cart: "Ten kod promocyjny został już użyty.",
    promocode_isnt_applicable: "Ten kod promocyjny jest nieprawidłowy.",
    promo_code_is_expired: "Wprowadzony kod jest nieaktualny.",
    stringEmpty: "To pole jest wymagane",
    required: "To pole jest wymagane",
    invalid_expiry_year_past: "Karta wygasła.",
    email: "Wprowadź poprawny adres e-mail",
    quantity_revised: "Quantity has been revised due to stock limitations.",
    quantity_out_of_stock:
      "Unfortunately, this item is out of stock, remove it from the cart to continue.",
    error_payment_items_are_invalid: {
      title: "Some items in your cart are invalid",
      description: "Please review your order, or try again later.",
    },
    order_validation: {
      domain_crawling: {
        title: "Order couldn’t be processed.",
        description:
          "You have not been charged. Please contact store owner for details.",
      },
      product_crawling: {
        title: "Price of products in cart may have changed.",
        description:
          "Try removing and adding them to your cart. Please contact store owner for details.",
      },
      stock_validation: {
        title: "Product stock unavailable.",
        description:
          "Some products may be out of stock for selected quantity. Revise quantity or contact store owner for details.",
      },
    },
    shipping: {
      title: "Unable to calculate shipping",
      description: "Try again later, or contact us for support.",
    },
    payment_failed: {
      title: "Unable to process payment",
      description: "Try again later, or contact us for support.",
    },
    payment_authorization: {
      title: "Unable to process payment",
      default: "Please review billing and payment information.",
    },
    authentication_challenge: {
      failed: {
        title: "Unable to process payment",
        description:
          "We have not been able to authenticate your payment information. Please try again",
      },
    },
    customer_exists: "This email is already used.",
    customer_password_missmatch: "The two passwords must match.",
    invalid_credentials: "Invalid email or password.",
    no_shipping_rates_found: {
      title: "No shipping method available for your order",
      description: "Please review shipping address or contact us.",
    },
  },
  customer_orders: {
    loading: "Ładowanie...",
  },
  confirmation: {
    thank_you_for_your_order: "Thank you for your order",
    async_confirmation_notice:
      "Your order has been placed and is currently processing. You will receive a confirmation shortly.",
  },
  checkout: {
    shipping_taxes_calculated_when_address_provided:
      "Przejdź dalej, aby sprawdzić koszty wysyłki",
  },
}

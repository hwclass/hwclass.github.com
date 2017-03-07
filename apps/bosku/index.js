const {
  h,
  app
} = hyperapp
/** @jsx h */

app({
  model: {
    haves: [],
    subs: [],
    inputHave: "",
    inputSub: "",
    currencyHave: 'TL',
    currencySub: 'TL',
    total: 0
  },
  view: (model, actions) =>
    <div class="flex-container">
      <p class="flex-item">
        <p>haves</p>
        <p>
        <input
          type="number" name="quantityHave" min="1" max="100000"
          onKeyUp={e => e.keyCode === 13 ? actions.add() : ""}
          onInput={e => actions.inputHave({ value: e.target.value })}
          value={model.inputHave}
        />
          <select onChange={e => actions.changeCurrencyHave({ value: e.target.value })}>
            <option>TL</option>
            <option>GBP</option>
            <option>EUR</option>
          </select>
        <button onClick={actions.add}>add</button>
      </p>
        <ul>
          {model.haves
            .map(t =>
              <li id={t.id} style={{
                color: t.done ? "gray" : "black",
                textDecoration: t.done ? "line-through" : "none"
              }}
                onClick={e => actions.toggle({
                  value: t.done,
                  id: t.id
                })}
              >
                {t.value} {t.currency}
              </li>)}
        </ul>
      </p>
      <p class="flex-item">
        <p>subs</p>
        <p>
        <input
          type="number" name="quantitySub" min="1" max="100000"
          onKeyUp={e => e.keyCode === 13 ? actions.add() : ""}
          onInput={e => actions.inputSub({ value: e.target.value })}
          value={model.inputSub}
        />
        <select onChange={e => actions.changeCurrencySub({ value: e.target.value })}>
          <option>TL</option>
          <option>GBP</option>
          <option>EUR</option>
        </select>
        <button onClick={actions.sub}>sub</button>
      </p>
        <ul>
          {model.subs
            .map(t =>
              <li id={t.id} style={{
                color: t.done ? "gray" : "black",
                textDecoration: t.done ? "line-through" : "none"
              }}
                onClick={e => actions.toggle({
                  value: t.done,
                  id: t.id
                })}
              >
                {t.value} {t.currency}
              </li>)}
        </ul>
      </p>
      <p class="flex-item">
        <p>total</p>
        <p>{model.total}</p>
      </p>
    </div>,

  actions: {
    add: model => ({
      inputHave: "",
      haves: model.haves.concat(Object.assign({}, {
        currency: model.currencyHave,
        value: model.inputHave,
        id: model.haves.length + 1
      })),
      total: parseInt(model.total) + parseInt(model.inputHave)
    }),
    sub: model => ({
      inputSub: "",
      subs: model.subs.concat({
        currency: model.currencySub,
        value: model.inputSub,
        id: model.haves.length + 1
      }),
      total: parseInt(model.total - model.inputSub)
    }),
    inputHave: (model, {
      value
    }) => ({
      inputHave: value
    }),
    inputSub: (model, {
      value
    }) => ({
      inputSub: value
    }),
    changeCurrencyHave: (model, {value}) => ({currencyHave: value}),
    changeCurrencySub: (model, {value}) => ({currencySub: value}),
  }
})
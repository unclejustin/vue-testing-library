import { render, shallowMount } from '@testing-library/vue'
import Stubs from './components/Stubs'

test('Form contains search button', () => {
  const { getByText } = render(Stubs, {
    stubs: ['FontAwesomeIcon'],
  })
  getByText('Search now')
})

test('Form does not contain search button', () => {
  const { queryByText } = shallowMount(Stubs, {
    stubs: ['FontAwesomeIcon'],
  })
  expect(queryByText('Search now')).toBeNull()
})

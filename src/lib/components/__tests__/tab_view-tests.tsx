import 'react-native'
import * as React from 'react'
import * as renderer from 'react-test-renderer'

import TabView from '../tab_view'

it('looks like expected', () => {
  const tree = renderer.create(
    <TabView titles={['one', 'two']} selectedIndex={1} onSelectionChange={() => {}} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

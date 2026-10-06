export function getTabById(tabs, id) {
  return tabs.find((tab) => tab.id === id) ?? tabs[0]
}

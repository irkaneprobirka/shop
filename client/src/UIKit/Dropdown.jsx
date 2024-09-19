import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = ({ items, selectedItem, onSelectItem, placeholder }) => {
  return (
    <Menu as="div" className="relative inline-block text-left mt-5 w-full">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedItem ? selectedItem.name : placeholder}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-full absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
      >
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="py-1">
              <MenuItem>
                <button
                  type="button"
                  onClick={() => onSelectItem(item.id)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {item.name}
                </button>
              </MenuItem>
            </div>
          ))
        ) : (
          <div className="py-1">
            <p className="px-4 py-2 text-sm text-gray-700">Нет доступных типов</p>
          </div>
        )}
      </MenuItems>
    </Menu>
  );
};
export default Dropdown;
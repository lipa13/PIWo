import {useState} from "react";

export default function SingleSelectDropdown({ options, label, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        onSelect(option); // przekazanie do rodzica
    };

    return (
        <div className="auto-wrapper ss-dropdown">
            <button
                className={`input-sell dropdown-btn`}
                type="button"
                onClick={toggleDropdown}
            >
                <p className={"dropdown-placeholder"}>{selected || label}</p>
            </button>

            {isOpen && (
                <ul className="auto-list dropdown-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="auto-list-item dropdown-option"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                            <input
                                type="checkbox"
                                checked={option === selected}
                                readOnly
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
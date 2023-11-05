export const PhaseOneKeyValue = {
    "female-xor1": "C3",
    "male-xor1": "C7",
    "young-xor2": "C15",
    "senior-xor2": "C4",
    "socializer": "C2",
    "achiever": "C1",
    "explorer": "C5",
    "employed-yes-xor3": "C14",
    "employed-no-xor3": "C19",
    "junior-xor4": "C16",
    "senior-xor4": "C17",
    "mandatory-yes-xor5": "C18",
    "existing-yes-xor6": "C12",
    "existing-no-xor6": "C13",
    "communication-low-xor7": "C20",
    "participation-low-xor8": "C23",
    "clarity-low-xor9": "C24",
    "variety-low-xor10": "C21",
    "variety-medium-xor10": "C31",
    "variety-high-xor10": "C25",
    "specificity-high-xor11": "C29",
    "identification-low-xor12": "C30",
    "trivial-common-xor13": "C27",
    "highly-specific-xor13": "C26",
    "hierarchy-neutral-xor14": "C33",
    "hierarchy-xor14": "C32",
    "public-good-non-rival-non-exclusive-xor15": "C34",
    "private-good-rival-exclusive-xor15": "C35"
};

export const PhaseOneSecondaryLogic = [
    {requiredNodes: ["C15", "C14"], resultNode: "C6"},
    {requiredNodes: ["C4", "C14"], resultNode: "C8"},
    {requiredNodes: ["C16", "C14"], resultNode: "C9"},
    {requiredNodes: ["C16", "C8", "C18"], resultNode: "C10"},
    {requiredNodes: ["C17", "C8"], resultNode: "C11"},
    {requiredNodes: ["C20", "C21"], resultNode: "C22"},
    {requiredNodes: ["C21", "C27"], resultNode: "C28"},
]

export type User = {
  id: number;
  name: string;
};

export type GetAllResourcesList = {
  count: number;
  results: IndexItem[];
};

export type DndClass = {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: ProficiencyChoice[];
  proficiencies: Proficiency[];
  saving_throws: AbilityScore[];
  starting_equipment: StartingEquipment[];
  starting_equipment_options: StartingEquipmentOption[];
  class_levels: string;
  multi_classing: Multiclassing;
  subclasses: Subclass[];
  url: string;
};

export type Race = {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: AbilityBonus[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: any[]; // Empty in provided object, specify further if structure is known
  languages: Language[];
  language_desc: string;
  traits: Trait[];
  subraces: any[]; // Empty in provided object, specify further if structure is known
  url: string;
};

type ItemReference = {
  index: string;
  name: string;
  url: string;
};

type Proficiency = {
  index: string;
  name: string;
  url: string;
};

type AbilityScore = {
  index: string;
  name: string;
  url: string;
};

type Subclass = {
  index: string;
  name: string;
  url: string;
};
type ProficiencyOption = {
  option_type: string;
  item?: ItemReference;
  choice?: ProficiencyChoiceDetail;
  count?: number;
  of?: ItemReference;
};

type ProficiencyChoiceDetail = {
  desc: string;
  type: string;
  choose: number;
  from: {
    option_set_type: string;
    options: ProficiencyOption[];
    equipment_category?: ItemReference;
  };
};

type ProficiencyChoice = {
  desc: string;
  choose: number;
  type: string;
  from: ProficiencyChoiceDetail["from"];
};

type StartingEquipment = {
  equipment: ItemReference;
  quantity: number;
};

type StartingEquipmentOption = {
  desc: string;
  choose: number;
  type: string;
  from: {
    option_set_type: string;
    options: Array<ProficiencyOption>;
  };
};

type MulticlassingPrerequisite = {
  ability_score: AbilityScore;
  minimum_score: number;
};

type Multiclassing = {
  prerequisites: MulticlassingPrerequisite[];
  proficiencies: Proficiency[];
};

type ProficiencyChoiceOptionItem = {
  index: string;
  name: string;
  url: string;
};

type Language = ProficiencyChoiceOptionItem; // Reusing for languages as the structure is identical.

type Trait = ProficiencyChoiceOptionItem; // Reusing for traits as the structure is identical.
type AbilityBonus = {
  ability_score: AbilityScore;
  bonus: number;
};

export type IndexItem = {
  index: string;
  name: string;
  url: string;
};

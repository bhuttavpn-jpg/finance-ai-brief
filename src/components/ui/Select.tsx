"use client";

interface Option<V extends string> { value: V; label: string }

interface Props<V extends string> {
  id: string;
  label: string;
  value: V;
  options: ReadonlyArray<Option<V>>;
  onChange: (v: V) => void;
}

export function Select<V extends string>({ id, label, value, options, onChange }: Props<V>) {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>
      <select
        id={id}
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value as V)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

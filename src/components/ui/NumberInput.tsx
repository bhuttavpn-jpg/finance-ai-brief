"use client";

interface Props {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
  min?: number;
  max?: number;
  hint?: string;
}

export function NumberInput({
  id, label, value, onChange, prefix, suffix, step = 1, min, max, hint,
}: Props) {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>
      <div className="flex items-center gap-2">
        {prefix && <span className="text-ink-muted text-sm">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          className="input"
          value={Number.isFinite(value) ? value : ""}
          step={step}
          min={min}
          max={max}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
        />
        {suffix && <span className="text-ink-muted text-sm">{suffix}</span>}
      </div>
      {hint && <p className="hint">{hint}</p>}
    </div>
  );
}

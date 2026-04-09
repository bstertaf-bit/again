"use client";

import { useEffect, useState } from "react";

type Props = {
  endpoint: string;
  titleField: string;
  descriptionField?: string;
  listKey: string;
};

export function SimpleListPanel({ endpoint, titleField, descriptionField, listKey }: Props) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then((r) => r.json())
      .then((d) => setItems(d[listKey] || []));
  }, [endpoint, listKey]);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="glass rounded-2xl p-4">
          <h3 className="font-semibold">{item[titleField]}</h3>
          {descriptionField && <p className="text-slate-300">{item[descriptionField]}</p>}
        </div>
      ))}
    </div>
  );
}

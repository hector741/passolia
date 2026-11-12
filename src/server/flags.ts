export const featureFlagNames = [
  "finance",
  "collaboration",
  "relationships",
  "wardrobe",
  "multimodal",
  "integrations",
  "billing",
  "experiments",
] as const;

export type FeatureFlag = (typeof featureFlagNames)[number];

const flagEnvKeys: Record<FeatureFlag, string> = {
  finance: "FEATURE_FINANCE",
  collaboration: "FEATURE_COLLABORATION",
  relationships: "FEATURE_RELATIONSHIPS",
  wardrobe: "FEATURE_WARDROBE",
  multimodal: "FEATURE_MULTIMODAL",
  integrations: "FEATURE_INTEGRATIONS",
  billing: "FEATURE_BILLING",
  experiments: "FEATURE_EXPERIMENTS",
};

export type FeatureFlags = Record<FeatureFlag, boolean>;

export function readFeatureFlags(
  source: Record<string, string | undefined>,
): FeatureFlags {
  const flags = {} as FeatureFlags;
  for (const name of featureFlagNames) {
    flags[name] = source[flagEnvKeys[name]] === "true";
  }
  return flags;
}

export function isFeatureEnabled(
  flags: FeatureFlags,
  name: FeatureFlag,
): boolean {
  return flags[name] === true;
}

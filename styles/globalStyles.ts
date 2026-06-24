import { StyleSheet } from "react-native";
import { DARK_THEME } from "./theme";

const { colors, spacing } = DARK_THEME;

export const globalStyles = StyleSheet.create({
  // Tracker Screen Styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.paddingLarge,
    paddingTop: 50,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.paddingLarge,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textDark,
    marginLeft: 15,
  },
  smallPlusButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: spacing.radiusMedium,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  plusButtonText: {
    color: colors.surface,
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 24,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondaryBg,
    borderRadius: spacing.radiusLarge,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.textDark,
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.dangerBg,
    borderRadius: spacing.radiusSmall,
    marginLeft: 8,
  },
  clearButtonText: {
    color: colors.dangerText,
    fontSize: 14,
    fontWeight: "600",
  },
  inlineAddRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: spacing.radiusSmall,
    marginBottom: 15,
  },
  ghostIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  inlineInput: {
    flex: 1,
    fontSize: 16,
    color: colors.textDark,
    paddingVertical: 6,
  },
  inlineAddButton: {
    backgroundColor: colors.secondaryBg,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: spacing.radiusSmall,
  },
  inlineAddButtonText: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    backgroundColor: colors.secondaryBg,
    borderRadius: spacing.radiusMedium,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: spacing.radiusSmall,
  },
  activeTabButton: {
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  pressedFeedback: {
    opacity: 0.7,
  },
  tabText: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },
  activeTabText: {
    color: colors.surface,
    fontWeight: "700",
    fontSize: 14,
  },

  // TaskItem Row Styles
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    padding: spacing.paddingMedium,
    borderRadius: spacing.radiusSmall,
    marginVertical: 6,
  },
  taskText: {
    fontSize: 16,
    color: colors.textDark,
    flex: 1,
    marginLeft: 10,
  },
  checkButton: {
    padding: 8,
    backgroundColor: colors.secondaryBg,
    borderRadius: spacing.radiusSmall,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButton: {
    padding: 8,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
  },

  // Add Task Screen Styles
  addFormContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.paddingLarge,
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.secondaryBg,
    borderRadius: spacing.radiusSmall,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: spacing.radiusLarge,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: "100%",
  },
  primaryButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },

  // Welcome Index Screen Styles
  indexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: spacing.paddingLarge,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textDark,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    width: "60%",
    borderRadius: spacing.radiusSmall,
    overflow: "hidden",
  },
});

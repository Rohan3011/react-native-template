/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TextInput as DefaultTextInput,
  Pressable as DefaultPressable,
  PressableProps,
} from "react-native";

import Colors from "../constants/Colors";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TextInputProps = ThemeProps & DefaultTextInput["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText
      style={[{ color }, style, { fontFamily: "Inter" }]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return (
    <DefaultTextInput
      style={[
        {
          height: 60,
          margin: 12,
          marginRight: 8,
          padding: 10,
          borderRadius: 18,
          fontSize: 18,
          backgroundColor: Colors.space,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function Pressable(props: any) {
  const { style, ...otherProps } = props;

  return (
    <DefaultPressable
      style={[
        {
          backgroundColor: Colors.lava,
          padding: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 18,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}

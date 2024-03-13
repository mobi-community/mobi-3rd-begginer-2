import { designTokens } from "../styles/designTokens";

const Button = ({ label, size = "base", color = "brandPrimary" }) => {
    const { colors, typography, spacing, borderRadius } = designTokens;
    const buttonStyle = {
        backgroundColor: colors[color],
        color: colors.textPrimary,
        fontSize: typography[`${size}FontSize`],
        padding: spacing.small,
        borderRadius: borderRadius.small,
    };

    return <button style={buttonStyle}>{label}</button>;
};

export default Button;

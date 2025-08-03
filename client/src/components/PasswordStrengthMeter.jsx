import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-sm">
          <span role="img" aria-label={item.met ? "Check" : "X"}>
            {item.met ? (
              <Check className="size-4 text-blue-400 mr-2" />
            ) : (
              <X className="size-4 text-gray-500 mr-2" />
            )}
          </span>
          <span className={item.met ? "text-blue-400" : "text-gray-400"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password}) => {
  if (!password) return null; // Hide meter if password is empty

  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[^a-zA-Z\d]/.test(pass)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const getColor = (level) => {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-400",
      "bg-green-400",
      "bg-blue-500",
    ];
    return colors[level] || "bg-gray-600";
  };

  const getStrengthText = (level) => {
    return ["Very Weak", "Weak", "Fair", "Good", "Strong"][level] || "";
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400">Password strength</span>
        <span className="text-xs text-gray-400">{getStrengthText(strength)}</span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
              ${index < strength ? getColor(index) : "bg-gray-600"}`}
          />
        ))}
      </div>

      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;

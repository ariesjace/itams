import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export function RoleChoice() {
  return (
    <div className="w-full">
      <FieldGroup>
        <FieldSet>
          <FieldLabel>Role</FieldLabel>

          <RadioGroup
            defaultValue="admin"
            className="flex items-center gap-6"
          >
            <FieldLabel htmlFor="admin" className="cursor-pointer">
              <Field orientation="horizontal" className="items-center space-x-2">
                <FieldContent>
                  <FieldTitle className="text-sm">Admin</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="admin" id="admin" />
              </Field>
            </FieldLabel>

            <FieldLabel htmlFor="guest" className="cursor-pointer">
              <Field orientation="horizontal" className="items-center space-x-2">
                <FieldContent>
                  <FieldTitle className="text-sm">Guest</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="guest" id="guest" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  );
}


export function AssetChoice() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLabel htmlFor="compute-environment-p8w">
            Compute Environment
          </FieldLabel>
          <FieldDescription>
            Select the compute environment for your cluster.
          </FieldDescription>
          <RadioGroup defaultValue="admin">
            <FieldLabel htmlFor="admin">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Admin</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="admin" id="admin" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="guest">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Guest</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="guest" id="guest" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
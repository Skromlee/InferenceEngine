def inference_engine(ruleList, inputFact):
    # handle when input with multiple fact!
    inputFactArr = inputFact.split(",")
    # print("from inference engine ===========>", ruleList)
    # print(inputFact)
    # print(inputFactArr)
    # print(ruleList)
    workingMemory = list(map(lambda x: x.upper(), inputFactArr))

    for rule in ruleList:
        # print()
        # print(rule)
        # print(workingMemory)
        # print()
        # print(type(rule))
        # print()
        # print()
        if any('NIL' in s for s in workingMemory):
            return ["Can you provide some fact?"]

        else:
            if 'operator1' in rule and 'operator2' in rule:
                # if there are fact that mat to fact
                firstCheck = False
                if rule['operator1'] == "AND":
                    # fact1 and fact 2
                    if any(rule['fact1'] in s for s in workingMemory) and any(rule['fact2'] in s for s in workingMemory):
                        firstCheck = True
                else:
                    # fact1 or fact2
                    if any(rule['fact1'] in s for s in workingMemory) or any(rule['fact2'] in s for s in workingMemory):
                        firstCheck = True

                if rule['operator2'] == "AND":
                    if firstCheck and any(rule['fact3'] in s for s in workingMemory):
                        if rule['conclude'] not in workingMemory:
                            workingMemory.append(rule['conclude'])
                else:
                    if firstCheck or any(rule['fact3'] in s for s in workingMemory):
                        if rule['conclude'] not in workingMemory:
                            workingMemory.append(rule['conclude'])

            elif 'operator1' in rule:
                if rule['operator1'] == "AND":
                    if any(rule['fact1'] in s for s in workingMemory) and any(rule['fact2'] in s for s in workingMemory):
                        if rule['conclude'] not in workingMemory:
                            workingMemory.append(rule['conclude'])

                else:
                    if any(rule['fact1'] in s for s in workingMemory) or any(rule['fact2'] in s for s in workingMemory):
                        if rule['conclude'] not in workingMemory:
                            workingMemory.append(rule['conclude'])

            else:
                if any(rule['fact1'] in s for s in workingMemory):
                    if rule['conclude'] not in workingMemory:
                        workingMemory.append(rule['conclude'])

    return workingMemory
# print(match)
# matches = {rule: 0 for rule in ruleList}

# for rule, fact_list in ruleList.items():
#     print(rule)
#     print(fact_list)

# matches = {}
